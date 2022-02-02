package ma.fstt;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import ma.fstt.entities.Admin;
import ma.fstt.entities.Tags;
import ma.fstt.services.GestionAdminService;
import ma.fstt.services.TagsServices;

@SpringBootApplication
public class ServerApplication implements CommandLineRunner{

	@Autowired
	TagsServices tagsServices;
	
	@Autowired 
	GestionAdminService gestionAdminService;

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		
		createDefaultAdmin();
		
		//initTags();

	}
	public void createDefaultAdmin() {
		if(gestionAdminService.getAllAdmin().size() <= 0) {
			gestionAdminService.saveAdmin(new Admin("default Admin", "admin@gmail.com", "admin"));
			System.out.println("default admin created ");
		}
			
	}
	

	public List<String> convertArrayToString(String [] strings){
		List<String> list = new ArrayList<String>();
		
		for(int i = 0; i < strings.length; i++) 
			list.add(strings[i]);
		
		return list;
	}
	public void initTags() {
	        		
		Tags t1 = new Tags("Neurologue");
		Tags t2 = new Tags("Endocrinologue");
		Tags t3 = new Tags("Dermatologue");
		Tags t4 = new Tags("Cardiologue");
		Tags t5 = new Tags("Chirurgien");
		Tags t6 = new Tags("Gynecologue");
		Tags t7 = new Tags("Hepatologue");
		Tags t8 = new Tags("Pediatre");
		Tags t9 = new Tags("Anesthesiologue");
		Tags t10 = new Tags("Ophtalmologue");
		Tags t11 = new Tags("Gastro-enterologue");
		Tags t12 = new Tags("Rhumatologue");

		String [] neuro = {"neurologue", "tete", "cervau", "neurones", "memoire", "nerfs"};
		String [] endo = {"Endocrinologue", "endocrinologue", "hormones"};
		String [] derma = {"dermatologue", "peau", "boutton", "acne", "point", "points", "brulure", "brulures", "bouttons", "cheveux"};
		String [] cardi = {"poitrine", "coeur", "cardiaque", "cardiologue", "essoufflement", "hypertension", "syncopes"};
		String [] chir = {"chirurgien", "operation", "dos", "Dos", "gonflement"};
		String [] gyne = {"gynecologue", "grocesse","regle", "regles", "menstruelle", "menstruation"};
		
		String [] hepa = {"hepatologue", "foie", "hepatie"};
		String [] pedia = {"pediatre", "enfant", "enfants", "bebe"};
		String [] anest = {"anesthesie", "anesthesiste", "operation", "operations"};
		String [] ophta = {"yeux", "oeuil", "vision", "lunette"};
		String [] gastro = {"digestion", "aliment", "manger", "aliments", "estomac"};
		String [] rhum = {"os", "colone", "vertebrale", "tendons", "muscles", "nerfs"};

		t1.setTags(convertArrayToString(neuro));	
		t2.setTags(convertArrayToString(endo));
		t3.setTags(convertArrayToString(derma));
		t4.setTags(convertArrayToString(cardi));
		t5.setTags(convertArrayToString(chir));	
		t6.setTags(convertArrayToString(gyne));
		t7.setTags(convertArrayToString(hepa));
		t8.setTags(convertArrayToString(pedia));
		t9.setTags(convertArrayToString(anest));	
		t10.setTags(convertArrayToString(ophta));
		t11.setTags(convertArrayToString(gastro));
		t12.setTags(convertArrayToString(rhum));
		
		List<Tags> listTags = new ArrayList<Tags>();
		listTags.add(t1);
		listTags.add(t2);
		listTags.add(t3);
		listTags.add(t4);
		listTags.add(t5);
		listTags.add(t6);
		listTags.add(t7);
		listTags.add(t8);
		listTags.add(t9);
		listTags.add(t10);
		listTags.add(t11);
		listTags.add(t12);
		
		tagsServices.addAll(listTags);
		
	}
}
