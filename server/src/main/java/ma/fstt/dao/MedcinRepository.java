package ma.fstt.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import ma.fstt.entities.Medcin;

@Repository
public interface MedcinRepository extends MongoRepository<Medcin, String>{
	@Query(value = "{'clinique.adress.ville': ?0}", fields = "{'profile' : 0}")
	List<Medcin> findAllByVille(String ville);

	List<Medcin> findAllBySpeciality(String speciality);
	
	@Query(value = "{'clinique.adress.ville': ?0, 'speciality' : ?1}", fields = "{'profile' : 0}")
	List<Medcin> findAllByVilleAndSpeciality(String ville, String speciality);
	
	@Query(value = "{'profile.email': ?0, 'profile.password' : ?1}")
	Medcin findProfileByEmailAndPassword(String email, String password);

}
