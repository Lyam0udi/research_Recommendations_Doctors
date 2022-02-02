package ma.fstt.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import ma.fstt.entities.DemandeForm;

@Repository
public interface DemandeFormRepository extends MongoRepository<DemandeForm, String> {

	DemandeForm findByEmail(String email);

}
