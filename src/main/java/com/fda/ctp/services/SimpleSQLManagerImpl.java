/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fda.ctp.services;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.procedure.ProcedureCall;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fda.ctp.bean.CodeValue;
import com.fda.ctp.bean.ReferenceType;
import com.fda.ctp.util.TDLProUtil;

/**
 *
 * @author rabalasubramani3
 */
@Service
@Transactional
@Repository("simpleSQLManager")
public class SimpleSQLManagerImpl implements SimpleSQLManager {
	/**
	 * The logger.
	 */
	Logger logger = LoggerFactory.getLogger(SimpleSQLManagerImpl.class);

	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<CodeValue> getCodeValues(String refType) {
		List<CodeValue> codeValues = new ArrayList<>();
		StringBuilder sql = new StringBuilder();
		sql.append("SELECT v.TP_REF_CODE, v.TP_REF_VALUE FROM tp_ref_value v INNER JOIN tp_ref_type t "
				+ "ON v.TP_REF_TYPE_ID = t.TP_REF_TYPE_ID " + "WHERE lower(t.TP_REF_TYPE_NM) LIKE :refType ");
		Query query = entityManager.unwrap(Session.class).createSQLQuery(sql.toString());
		query.setParameter("refType", "%" + refType.toLowerCase() + "%");
		List<Object[]> results = query.list();
		if (results != null) {
			for (Object[] result : results) {
				CodeValue score = new CodeValue();
				score.setCode(safeToString(result[0]));
				score.setValue(safeToString(result[1]));
				codeValues.add(score);
			}
		}
		return codeValues;
	}

	@Override
	public List<ReferenceType> getReferencTypes() {
		List<ReferenceType> refTypes = new ArrayList<>();
		StringBuilder sql = new StringBuilder();
		sql.append("SELECT t.TP_REF_TYPE_ID,t.TP_REF_TYPE_NM, t.TP_REF_TYPE_DESC FROM tp_ref_type t ");
		Query query = entityManager.unwrap(Session.class).createSQLQuery(sql.toString());
		List<Object[]> results = query.list();
		if (results != null) {
			for (Object[] result : results) {
				ReferenceType rt = new ReferenceType();
				int col = 0;
				rt.setReferenceTypeId(Long.parseLong(result[col++].toString()));
				rt.setName(safeToString(result[col++]));
				rt.setDescription(safeToString(result[col++]));
				refTypes.add(rt);
			}
		}
		return refTypes;
	}

	/**
	 * 
	 * @return
	 */
	@Override
	public CodeValue refreshActualRates() {
		ProcedureCall procedureCall = entityManager.unwrap(Session.class)
				.createStoredProcedureCall("sp_updateActualRates");
		procedureCall.getOutputs();

		CodeValue retValue = new CodeValue();
		retValue.setCode("COMPLETED");
		retValue.setValue("Updated Actual Rates...");
		return retValue;
	}

	/**
	 * 
	 * @return
	 */
	public List<CodeValue> getMissingUsers() {
		List<CodeValue> codeValues = new ArrayList<>();
		StringBuilder sql = new StringBuilder();
		sql.append("select r.name, r.employee_id from tp_resource r " + "left join tp_user u "
				+ "on r.employee_id = u.EMPLOYEE_ID " + "where u.EMPLOYEE_ID is null " + "order by r.name asc ");
		Query query = entityManager.unwrap(Session.class).createSQLQuery(sql.toString());
		List<Object[]> results = query.list();
		if (results != null) {
			for (Object[] result : results) {
				CodeValue score = new CodeValue();
				score.setCode(safeToString(result[0]));
				score.setValue(safeToString(result[1]));
				codeValues.add(score);
			}
		}
		return codeValues;
	}

	/**
	 * Update plan hours with new resource id
	 * 
	 * @param tdlId
	 * @param oldResourceId
	 * @param newResourceId
	 * @return
	 */
	@Override
	public boolean updatePlanHoursWithResource(Long tdlId, Long oldResourceId, Long newResourceId) {
		StringBuilder sql = new StringBuilder();
		sql.append(
				"update tp_tdl_plan_hrs set resource_id = :newresourceid where tdl_id = :tdlid and resource_id = :oldresourceid");
		Query query = entityManager.unwrap(Session.class).createSQLQuery(sql.toString());
		query.setParameter("newresourceid", newResourceId);
		query.setParameter("tdlid", tdlId);
		query.setParameter("oldresourceid", oldResourceId);
		query.executeUpdate();
		return true;
	}

	/**
	 * Test criterion.
	 *
	 * @param criterion the criterion
	 * @return true, if successful
	 */
	private boolean testCriterion(String criterion) {
		return (criterion != null && !criterion.isEmpty());
	}

	private Double safeDecimalToDouble(Object result) {
		if (result != null) {
			return (((BigDecimal) result).doubleValue());
		}
		return 0.0;
	}

	private LocalDate safeToDate(Object result) {
		if (result != null) {
			return (TDLProUtil.parseStringToDate(result.toString()));
		}
		return null;
	}

	private Double safeToDouble(Object result) {
		if (result != null) {
			return (Double.parseDouble((safeToString(result))));
		}
		return 0.0;
	}

	private Long safeToLong(Object result) {
		if (result != null) {
			return (Long.parseLong((safeToString(result))));
		}
		return 0L;
	}

	/**
	 * Test criterion.
	 *
	 * @param criterion the criterion
	 * @return true, if successful
	 */
	private boolean testCriterion(Set<String> criterion) {
		return (criterion != null && !criterion.isEmpty());
	}

	/**
	 * Safe to string.
	 *
	 * @param result the result
	 * @return the string
	 */
	private String safeToString(Object result) {
		if (result != null) {
			return result.toString().trim();
		}
		return null;
	}

	private String safeToString2(Object result) {
		if (result != null) {
			return result.toString().trim();
		}
		return "";
	}

//    private LocalDate Date(Object result) {
//        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
//    }

	@Override
	public void passwordMigrationByUsername(String newPasswordHash, String name) {
		StringBuilder sql = new StringBuilder();
		sql.append("UPDATE tp_user SET password = :password WHERE email = :email");
		Query query = entityManager.unwrap(Session.class).createSQLQuery(sql.toString());
		query.setParameter("password", newPasswordHash);
		query.setParameter("email", name);
		query.executeUpdate();
	}

	public void nestedLoopThroughRules(JSONObject obj, List<String> lstFieldTypes) {
		Iterator<?> keys = obj.keys();
		while (keys.hasNext()) {
			String key = (String) keys.next();
			if ("type".equals(key)) {
				String typeValue;
				try {
					typeValue = obj.get(key).toString();
					lstFieldTypes.add(typeValue);
				} catch (JSONException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}

			}
			if ("rules".equals(key)) {
				try {
					if (obj.get(key) instanceof JSONObject) {
						nestedLoopThroughRules(new JSONObject(obj.get(key).toString()), lstFieldTypes);
					}
				} catch (JSONException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				try {
					if (obj.get(key) instanceof JSONArray) {
						JSONArray arrValues = (JSONArray) obj.get(key);
						for (int i = 0; i < arrValues.length(); i++) {
							nestedLoopThroughRules(arrValues.getJSONObject(i), lstFieldTypes);
						}
					}
				} catch (JSONException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
	}

}
