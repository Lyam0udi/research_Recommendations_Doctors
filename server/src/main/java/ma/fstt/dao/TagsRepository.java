package ma.fstt.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import ma.fstt.entities.Tags;

@Repository
public interface TagsRepository extends MongoRepository<Tags, String>{

}
