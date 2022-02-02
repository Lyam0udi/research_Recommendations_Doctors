package ma.fstt.sequences;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SequenceGenerator {

	@Autowired
	SequenceRepository sequenceRepository;
	
	public Long generateSequence(String seqName) {
		DatabaseSequence databaseSequence = sequenceRepository.findById(seqName).orElse(null);
		if(databaseSequence == null) {
			sequenceRepository.save(new DatabaseSequence(seqName, (long) 1));
			return (long) 1;
			
		}
		Long seq = databaseSequence.getSeq() + 1;
		databaseSequence.setSeq(seq);
		sequenceRepository.save(databaseSequence);
		return seq;
	}
}
