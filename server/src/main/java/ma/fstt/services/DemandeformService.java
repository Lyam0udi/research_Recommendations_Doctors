package ma.fstt.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ma.fstt.dao.DemandeFormRepository;
import ma.fstt.entities.DemandeForm;
import ma.fstt.sequences.SequenceGenerator;

@Service
public class DemandeformService {
	@Autowired
	DemandeFormRepository demandeFormRepository;
	
	@Autowired
	SequenceGenerator Sequencesenerator;
	
	/*@Autowired
    private JavaMailSender javaMailSender;*/
	
	public DemandeForm saveDemandeForm(DemandeForm form) {
		if(form == null) return null;
				
		if(form.getId() == null) {
			form.setId("" + Sequencesenerator.generateSequence(DemandeForm.SEQUENCE_NAME));
		}
			
		return demandeFormRepository.save(form);
	}
	
	public DemandeForm addForm(DemandeForm form) {
		if(form != null && form.getEmail() != null){
			if(demandeFormRepository.findByEmail(form.getEmail()) == null)
				return saveDemandeForm(form);
			//sendMail(form);
		}
		return null;
	}
	
	/*public void sendMail(DemandeForm form) {
		try {
			SimpleMailMessage msg = new SimpleMailMessage();
	        msg.setTo(form.getEmail());
	        msg.setSubject("Affirmation de demande");
	        msg.setText("Bonjour Mr " + form.getName() + "\n votre demande d'insciption de votre clinique : "+ form.getCliniqueName() +
	        		" a eté bien recu !\n apres un traitement, vous recevrez prochainement recevrez un email"+
	        		" pour affirmer la validité \n on vous remercie !");

	        javaMailSender.send(msg);
		}catch(Exception e) {}
		
	}*/
}
