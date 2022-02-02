package ma.fstt.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ma.fstt.entities.DemandeForm;
import ma.fstt.services.DemandeformService;

@RestController
@RequestMapping("form")
@CrossOrigin(origins="http://localhost:3000")
public class DemandeFormController {
	
	@Autowired
	DemandeformService demandeformService;

	@PostMapping("/add")
	public DemandeForm addForm(@RequestBody DemandeForm form){
		
		return demandeformService.addForm(form);
	}
}
