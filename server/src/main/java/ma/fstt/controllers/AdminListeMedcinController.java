package ma.fstt.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ma.fstt.entities.Admin;
import ma.fstt.entities.Medcin;
import ma.fstt.services.GestionAdminService;
import ma.fstt.services.GestionMedcinService;

@RestController
@RequestMapping("listmedcins")
@CrossOrigin(origins="http://localhost:3000")
public class AdminListeMedcinController {

	@Autowired
	GestionAdminService gestionAdminService;
	
	@Autowired
	GestionMedcinService gestionMedcinService;
	
	@PostMapping("/all")
	public List<Medcin> listAllMedcin(@RequestBody Admin admin){
		if(gestionAdminService.login(admin) != null)
		return gestionMedcinService.getAll();
		
		return new ArrayList<Medcin>();
	}
	
	@PostMapping("/delete/{id}")
	public String deleteMedcin(@RequestBody Admin admin, @PathVariable("id") String id){
		if(gestionAdminService.login(admin) != null)
			gestionMedcinService.deleteMedcin(id);
		return "succes";
	}
	
}
