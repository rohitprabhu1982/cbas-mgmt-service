/**
 * 
 */
package com.fda.ctp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.fda.ctp.domain.UserFilters;

/**
 * @author roprabhu
 *
 */
@Repository
public interface UserSaveFilterRepository extends JpaRepository<UserFilters, Integer> {
	@Query(value = "SELECT f.* FROM tp_user_save_filter f WHERE (f.user_id = ?1)", nativeQuery = true)
	List<UserFilters> findUserFiltersByCategory(String userid);

}
