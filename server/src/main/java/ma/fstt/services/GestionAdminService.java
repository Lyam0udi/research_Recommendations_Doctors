package ma.fstt.services;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ma.fstt.dao.AdminRepository;
import ma.fstt.entities.Admin;
import ma.fstt.sequences.SequenceGenerator;

@Service
public class GestionAdminService {

	@Autowired
	AdminRepository adminRepository;
	
	@Autowired
	SequenceGenerator sequenceGenerator;
	
	public Admin login(Admin admin) {
		return adminRepository.findByEmailAndPassword(admin.getEmail(), admin.getPassword());
	}
	
	public Admin saveAdmin(Admin admin) {
		if (admin == null) return null;
		
		if (admin.getId() ==null)
			admin.setId("" + sequenceGenerator.generateSequence(Admin.SEQUENCE_NAME));
		return adminRepository.save(admin);
	}
	
	public Admin ajouterAdmin(Admin admin, Admin newAdmin) {
		if(login(admin) != null)
			return saveAdmin(newAdmin);
		return null;
	}
	
	public Admin updateAdmin(Admin admin, Admin modifiedAdmin) {
		if(login(admin) != null)
			return saveAdmin(modifiedAdmin);
		return null;
	}
	
	public List<Admin> getAllAdmin(){
		return adminRepository.findAll();
	}
	
	public List<Admin> listAdmin(Admin admin){
		if(login(admin) != null)
			return getAllAdmin();
		return null;
	}

	public void delete(Admin admin, String id) {
		// TODO Auto-generated method stub
		if(login(admin) != null) {
			adminRepository.deleteById(id);
		}
	}
	
	public String randomPasswordGenerator() {
		Random rd = new Random();
		String password = "";
		for(int i = 0; i < 8; i++) {
			char a = (char) (rd.nextInt(125 - 33) + 33);
			password += a;
		}
		
		return password;
	}

	public Admin addAdmin(Admin admin, String name, String email) {
		// TODO Auto-generated method stub
		if(email == null) return null;
		Admin newAdmin = null;
		
		if(login(admin) != null) {
			if(adminRepository.findByEmail(email) == null) {
				newAdmin = new Admin(email, randomPasswordGenerator());
				newAdmin.setName(name);
				newAdmin = saveAdmin(newAdmin);
			}
		}
		
		return newAdmin;
	}

	public Admin updateAdmin(Admin admin, String name, String email, String password) {
		// TODO Auto-generated method stub
		admin = login(admin);
		
		if(admin == null || email == null || password == null 
				|| email.equals("") || password.equals(""))
			return null;
		
		admin.setName(name);
		admin.setEmail(email);
		admin.setPassword(password);
		
		return saveAdmin(admin);
	}
}
