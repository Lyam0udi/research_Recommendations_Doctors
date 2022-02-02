package ma.fstt.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ma.fstt.entities.Adress;
import ma.fstt.entities.Clinique;
import ma.fstt.entities.Medcin;
import ma.fstt.entities.Profile;
import ma.fstt.entities.WebSite;
import ma.fstt.services.MedcinProfileService;

@RestController
@RequestMapping("profile")
@CrossOrigin(origins="http://localhost:3000")
public class UpdateProfileController {

	@Autowired
	MedcinProfileService medcinProfileService;
	
	@PostMapping("login")
	public Profile login(@RequestBody Profile profile){
		return medcinProfileService.login(profile);
	}
	
	@PostMapping("medcin")
	public Medcin getMedcin(@RequestBody Profile profile){
		
		return medcinProfileService.findByEmailAndPassword(profile);
	}
	
	@PostMapping("update/name={name}/speciality={speciality}")
	public Medcin updateMedcinFields(@RequestBody Profile profile, @PathVariable("name") String name,
			@PathVariable("speciality") String speciality){
		return medcinProfileService.updateMedcinFields(profile, name, speciality);
	}
	
	@PostMapping("update/profile/email={email}/password={password}")
	public Profile updateProfileFields(@RequestBody Profile profile, @PathVariable("email") String email,
			@PathVariable("password") String password){
		
		return medcinProfileService.updateProfileFields(profile, email, password);
	}
	
	@PostMapping("update/clinique/name={name}/oppenat{oppenat}/closeat={closeat}/number={number}/email={email}")
	public Clinique updateCliniqueFields(@RequestBody Profile profile, @PathVariable("name") String name,
			@PathVariable("oppenat") String oppenAt, @PathVariable("closeat") String closeAt,
			@PathVariable("number") String number, @PathVariable("email") String email){
		
		return medcinProfileService.updateCliniqueFields(profile, name, oppenAt, closeAt, number, email);
	}
	
	@PostMapping("update/website/ville={ville}/location{location}/longitude={longitude}/latitude={latitude}")
	public Adress updateAdressFields(@RequestBody Profile profile, @PathVariable("ville") String ville,
			@PathVariable("location") String location, @PathVariable("longitude") double longitude,
			@PathVariable("latitude") double latitude){
		
		return medcinProfileService.updateAdressFields(profile, ville, location, longitude, latitude);
	}
	
	@PostMapping("update/adress/name={name}/url{url}")
	public WebSite updateWebSiteFields(@RequestBody Profile profile, @PathVariable("name") String name,
			@PathVariable("url") String url){
		
		return medcinProfileService.updateWebSiteFields(profile, name, url);
	}
	
}
