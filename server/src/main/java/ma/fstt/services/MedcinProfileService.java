package ma.fstt.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ma.fstt.dao.MedcinRepository;
import ma.fstt.entities.Adress;
import ma.fstt.entities.Clinique;
import ma.fstt.entities.Medcin;
import ma.fstt.entities.Profile;
import ma.fstt.entities.WebSite;

@Service
public class MedcinProfileService {

	@Autowired
	MedcinRepository medcinRepository;
	
	public Medcin findByEmailAndPassword(Profile profile) {
		return medcinRepository.findProfileByEmailAndPassword(profile.getEmail(), profile.getPassword());
	}
	
	public Profile login(Profile profile) {
		Medcin medcin = findByEmailAndPassword(profile);
		
		if(medcin != null)
			return medcin.getProfile();
		
		return null;
	}

	public Medcin updateMedcinFields(Profile profile, String name, String speciality) {
		// TODO Auto-generated method stub
		Medcin medcin = findByEmailAndPassword(profile);
		if(medcin == null) return null;
		
		medcin.setName(name);
		medcin.setSpeciality(speciality);
		
		return medcinRepository.save(medcin);
	}

	public Profile updateProfileFields(Profile profile, String email, String password) {
		// TODO Auto-generated method stub
		Medcin medcin = findByEmailAndPassword(profile);
		if(medcin == null) return null;
		
		medcin.getProfile().setEmail(email);
		medcin.getProfile().setPassword(password);
		
		medcin = medcinRepository.save(medcin);
		
		return medcin.getProfile();
	}

	public Clinique updateCliniqueFields(Profile profile, String name, String oppenAt, String closeAt, String number,
			String email) {
		// TODO Auto-generated method stub
		Medcin medcin = findByEmailAndPassword(profile);
		if(medcin == null) return null;
		
		medcin.getClinique().setName(name);
		medcin.getClinique().setOppenAt(oppenAt);
		medcin.getClinique().setCloseAt(closeAt);
		medcin.getClinique().setNumber(number);
		medcin.getClinique().setEmail(email);
		
		medcin = medcinRepository.save(medcin);
		
		return medcin.getClinique();
	}

	public Adress updateAdressFields(Profile profile, String ville, String location, double longitude,
			double latitude) {
		// TODO Auto-generated method stub
		Medcin medcin = findByEmailAndPassword(profile);
		if(medcin == null) return null;
		
		medcin.getClinique().getAdress().setVille(ville);
		medcin.getClinique().getAdress().setLocation(location);
		medcin.getClinique().getAdress().setLongitude(longitude);
		medcin.getClinique().getAdress().setLatitude(latitude);
		
		medcin = medcinRepository.save(medcin);
		
		return medcin.getClinique().getAdress();
	}

	public WebSite updateWebSiteFields(Profile profile, String name, String url) {
		// TODO Auto-generated method stub
		Medcin medcin = findByEmailAndPassword(profile);
		if(medcin == null) return null;
		
		medcin.getClinique().getWebSite().setName(name);
		medcin.getClinique().getWebSite().setUrl(url);
		
		medcin = medcinRepository.save(medcin);
		
		return medcin.getClinique().getWebSite();
	}

	
}
