package ma.fstt.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ma.fstt.dao.TagsRepository;
import ma.fstt.entities.Tags;
import ma.fstt.sequences.SequenceGenerator;

@Service
public class TagsServices {

	@Autowired
	TagsRepository tagsRepository;
	
	@Autowired
	SequenceGenerator sequenceGenerator;
	
	public Tags saveTag(Tags tags) {
		if(tags == null) return null;
		
		if (tags.getId() == null)
			tags.setId("" + sequenceGenerator.generateSequence(Tags.SEQUENCE_NAME));
		
		return tagsRepository.save(tags);
	}
	 
	public List<Tags> addAll(List<Tags> listTags){
		for(Tags tags : listTags)
			tags = saveTag(tags);
		
		return listTags;
	}
	
	public List<Tags> findAll(){
		return tagsRepository.findAll();
	}
}
