package ma.fstt.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ma.fstt.entities.Admin;
import ma.fstt.entities.DemandeForm;
import ma.fstt.entities.Medcin;
import ma.fstt.services.GestionDemandeFormService;

@RestController
@RequestMapping("demandes/form")
@CrossOrigin(origins="http://localhost:3000")
public class GestionDemandeFormController {
	
	@Autowired
	GestionDemandeFormService gestionDemandeForm;

	@PostMapping("/all")
	public List<DemandeForm> listAllDemandesForm(@RequestBody Admin admin){
		
		return gestionDemandeForm.listDemandesForm(admin);
	}
	
	@PostMapping("/reject/{id}")
	public String deleteDemandesForm(@RequestBody Admin admin, @PathVariable("id") String id){
		
		gestionDemandeForm.deleteForm(admin, id);
		
		return "succes";
	}
	
	@PostMapping("/accept/{id}")
	public Medcin acceptDemandesForm(@RequestBody Admin admin, @PathVariable("id") String id){
		
		return gestionDemandeForm.acceptForm(admin, id);
	}
}
