package ma.fstt.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ma.fstt.entities.Medcin;
import ma.fstt.services.SearchMedcinService;


@RestController
@RequestMapping("search")
@CrossOrigin(origins="http://localhost:3000")
public class SearchMedcinController {
	@Autowired
	SearchMedcinService searchMedcinService;
	
	@GetMapping(value="/ville/{ville}")
	public List<Medcin> getAllByVille(@PathVariable("ville")String ville){
		
		return searchMedcinService.findAllByVille(ville);
	}
	
	@GetMapping(value="/speciality/{speciality}")
	public List<Medcin> getAllBySpeciality(@PathVariable("speciality")String speciality){
		
		return searchMedcinService.findAllBySpeciality(speciality);
	}
	
	@GetMapping(value="/ville/{ville}/speciality/{speciality}")
	public List<Medcin> getAllByVilleAndSpeciality(@PathVariable("ville")String ville, @PathVariable("speciality")String speciality){
		
		return searchMedcinService.findAllByVilleAndSpecality(ville, speciality);
	}
	
	@PostMapping("/douleurs")
	public List<Medcin>  getAllByDouleurs(@RequestBody String douleurs){
		
		return searchMedcinService.findByDouleurs(douleurs);
	}
	
}
