package ma.fstt.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ma.fstt.dao.MedcinRepository;
import ma.fstt.entities.Adress;
import ma.fstt.entities.Clinique;
import ma.fstt.entities.Medcin;
import ma.fstt.entities.Profile;
import ma.fstt.entities.WebSite;
import ma.fstt.sequences.SequenceGenerator;

@Service
public class GestionMedcinService {
	@Autowired
	MedcinRepository medcinRepository;

	@Autowired
	SequenceGenerator sequenceGenerator;
	
	public Medcin saveMedcin(Medcin medcin) {
		if (medcin == null) return null;
		
		if(medcin.getId() == null)
			medcin.setId("" + sequenceGenerator.generateSequence(Medcin.SEQUENCE_NAME));
		
		if(medcin.getClinique() != null) {
			if(medcin.getClinique().getId() == null)
				medcin.getClinique().setId("" + sequenceGenerator.generateSequence(Clinique.SEQUENCE_NAME));
			
			if(medcin.getClinique().getAdress() != null && medcin.getClinique().getAdress().getId() == null)
				medcin.getClinique().getAdress().setId("" + sequenceGenerator.generateSequence(Adress.SEQUENCE_NAME));
			
			if(medcin.getClinique().getWebSite() != null && medcin.getClinique().getWebSite().getId() == null)
				medcin.getClinique().getWebSite().setId("" + sequenceGenerator.generateSequence(WebSite.SEQUENCE_NAME));
		}
		
		if(medcin.getProfile() != null && medcin.getProfile().getId() == null)
			medcin.getProfile().setId("" + sequenceGenerator.generateSequence(Profile.SEQUENCE_NAME));
		
		return medcinRepository.save(medcin);
	}
	
	public List<Medcin> saveAll(List<Medcin> medcins){
		for(Medcin medcin : medcins)
			medcin = saveMedcin(medcin);
		
		return medcins;
	}
	
	public List<Medcin> getAll(){
		return medcinRepository.findAll();
	}
	
	public Medcin addMedcin(Medcin medcin) {
		
		return saveMedcin(medcin);
	}
	
	public void deleteMedcin(String id) {
		
		medcinRepository.deleteById(id);
	}
}
