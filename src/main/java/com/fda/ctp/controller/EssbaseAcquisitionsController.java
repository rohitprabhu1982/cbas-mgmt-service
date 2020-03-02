package com.fda.ctp.controller;

import java.sql.SQLException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.essbase.api.base.EssException;
import com.fda.ctp.bean.AcquisitionPreCommitmentList;
import com.fda.ctp.bean.AcquisitionsWithCTP;
import com.fda.ctp.services.EssbaseDataQueryApplicationService;

@CrossOrigin(origins = "maxAge = 3600")
@RestController
@RequestMapping("/api/v1/acquisition")
public class EssbaseAcquisitionsController {

	public static final Logger logger = LoggerFactory.getLogger(EssbaseAcquisitionsController.class);

	@Autowired
	EssbaseDataQueryApplicationService essbaseQuerySampleApApplicationService; // Service which will do all data
																				// retrieval/manipulation work

	@SuppressWarnings("unchecked")
	@GetMapping(value = "/essacquisition/ctp/")

	public ResponseEntity<List<AcquisitionsWithCTP>> getAcquisitionWithCTPData(@RequestParam("office") String office,
			@RequestParam("acquisitonType") Optional<String> acquisitonType,
			@RequestParam("version") Optional<String> version, @RequestParam("role") String role)
			throws SQLException, EssException {

		List<AcquisitionsWithCTP> acquisitionList = essbaseQuerySampleApApplicationService
				.getAcquisitionWithCTPData(office, acquisitonType, version, role);

		if (acquisitionList == null || acquisitionList.isEmpty()) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);

		}
		return new ResponseEntity<List<AcquisitionsWithCTP>>(acquisitionList, HttpStatus.OK);
	}

	@GetMapping(value = "/essacquisition/runcalc/")

	public ResponseEntity<?> runCalculation(@RequestParam("runcCalcValue") String runcCalcValue)
			throws SQLException, ParseException {

		boolean runCalcStatus = essbaseQuerySampleApApplicationService.runCalculation(runcCalcValue);

		if (!runCalcStatus) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
			// You many decide to return HttpStatus.NOT_FOUND
		}
		return new ResponseEntity(HttpStatus.OK);
	}

	@GetMapping(value = "/essacquisition/office/")

	public ResponseEntity<List<String>> getAcquistionOfficeDetails() throws EssException, SQLException {

		List<String> acquisitionOfficeList = essbaseQuerySampleApApplicationService.getAcquisitionOfficeData();

		if (acquisitionOfficeList == null || acquisitionOfficeList.isEmpty()) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
			// You many decide to return HttpStatus.NOT_FOUND
		}
		return new ResponseEntity<List<String>>(acquisitionOfficeList, HttpStatus.OK);
	}

	@GetMapping(value = "/essacquisition/precommitmentlistdata/")
	public ResponseEntity<AcquisitionPreCommitmentList> getAcquistionHardcodedDropdownDetails()
			throws EssException, SQLException {

		AcquisitionPreCommitmentList acquisitionPreCommitmentList = essbaseQuerySampleApApplicationService
				.getAcquisitionPreCommitmentList();

		if (acquisitionPreCommitmentList == null) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);

		}
		return new ResponseEntity<AcquisitionPreCommitmentList>(acquisitionPreCommitmentList, HttpStatus.OK);
	}

	@GetMapping(value = "/essacquisition/precommitmentlist/")
	public ResponseEntity<AcquisitionPreCommitmentList> getAcquistionDropdownDetails(
			@RequestParam("office") Optional<String> office, @RequestParam("acquisitonType") Optional<String> acquisitonType,
			@RequestParam("version") Optional<String> version) throws EssException, SQLException {

		AcquisitionPreCommitmentList acquisitionPreCommitmentList = essbaseQuerySampleApApplicationService
				.getAcquisitionPreCommitmentListData(office,acquisitonType,version);

		if (acquisitionPreCommitmentList == null) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);

		}
		return new ResponseEntity<AcquisitionPreCommitmentList>(acquisitionPreCommitmentList, HttpStatus.OK);
	}

	@GetMapping(value = "/essacquisition/precommitmentdetails/")

	public ResponseEntity<List<AcquisitionsWithCTP>> getAcquisitionPreCommitmentDetails(
			@RequestParam("office") String office, @RequestParam("acquisitonType") String acquisitonType,
			@RequestParam("version") String version, @RequestParam("lineItem") String lineItem)
			throws SQLException, EssException {
		String truncateLineItem = lineItem.substring(0, lineItem.indexOf(':'));

		List<AcquisitionsWithCTP> acquisitionList = essbaseQuerySampleApApplicationService
				.getAcquisitionPreCommitmentDetails(office, acquisitonType, version, truncateLineItem);

		if (acquisitionList == null || acquisitionList.isEmpty()) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
			// You many decide to return HttpStatus.NOT_FOUND
		}
		return new ResponseEntity<List<AcquisitionsWithCTP>>(acquisitionList, HttpStatus.OK);
	}

	@PostMapping(value = "/essacquisition/updatewithctp/")
	public ResponseEntity<?> updateAcquisitionWithCTPData(@RequestBody List<AcquisitionsWithCTP> acquisitions,
			@RequestParam("office") String office, @RequestParam("acquisitonType") Optional<String> acquisitonType,
			@RequestParam("version") Optional<String> version) throws SQLException, ParseException, EssException {
		logger.info("Update Record : {}", acquisitions);
		HttpHeaders headers = new HttpHeaders();

		boolean status = essbaseQuerySampleApApplicationService.setAcquisitionWithCTPData(acquisitions, office,
				acquisitonType, version);
		if (status) {
			return new ResponseEntity<String>(headers, HttpStatus.CREATED);
		} else {
			return new ResponseEntity<String>(headers, HttpStatus.BAD_REQUEST);
		}

	}

	@PostMapping(value = "/essacquisition/updateprecommitmentdetails/")
	public ResponseEntity<?> updatePrecommitmentDetailsData(@RequestBody AcquisitionsWithCTP acquisitions,
			@RequestParam("office") String office, @RequestParam("acquisitonType") Optional<String> acquisitonType,
			@RequestParam("version") Optional<String> version) throws SQLException, ParseException, EssException {
		logger.info("Update Record : {}", acquisitions);
		HttpHeaders headers = new HttpHeaders();

		List<AcquisitionsWithCTP> acquisitionList = new ArrayList<AcquisitionsWithCTP>();
		acquisitionList.add(acquisitions);
		boolean status = essbaseQuerySampleApApplicationService.setAcquisitionWithCTPData(acquisitionList, office,
				acquisitonType, version);
		if (status) {
			return new ResponseEntity<String>(headers, HttpStatus.CREATED);
		} else {
			return new ResponseEntity<String>(headers, HttpStatus.BAD_REQUEST);
		}

	}

}
