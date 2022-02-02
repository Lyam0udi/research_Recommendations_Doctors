package ma.fstt.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import ma.fstt.entities.Admin;

@Repository
public interface AdminRepository extends MongoRepository<Admin, String> {

	Admin findByEmailAndPassword(String email, String password);

	Admin findByEmail(String email);

}
