package ma.fstt.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
 
public class DemandeForm {
	@Transient
    public static final String SEQUENCE_NAME = "demande_forms_sequence";
	
	@Id
	private String id;
	private String name;
	private String email;
	private String password;
	private String speciality;
	private String publicEmail;
	private String ville;
	private String cliniqueName;
	private String number;
	private String oppenAt;
	private String closeAt;
	private String adress;
	private String webSiteName;
	private String webSiteUrl;
	
	public DemandeForm() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getSpeciality() {
		return speciality;
	}

	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}

	public String getPublicEmail() {
		return publicEmail;
	}

	public void setPublicEmail(String publicEmail) {
		this.publicEmail = publicEmail;
	}

	public String getVille() {
		return ville;
	}

	public void setVille(String ville) {
		this.ville = ville;
	}

	public String getCliniqueName() {
		return cliniqueName;
	}

	public void setCliniqueName(String cliniqueName) {
		this.cliniqueName = cliniqueName;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public String getOppenAt() {
		return oppenAt;
	}

	public void setOppenAt(String oppenAt) {
		this.oppenAt = oppenAt;
	}

	public String getCloseAt() {
		return closeAt;
	}

	public void setCloseAt(String closeAt) {
		this.closeAt = closeAt;
	}

	public String getAdress() {
		return adress;
	}

	public void setAdress(String adress) {
		this.adress = adress;
	}

	public String getWebSiteName() {
		return webSiteName;
	}

	public void setWebSiteName(String webSiteName) {
		this.webSiteName = webSiteName;
	}

	public String getWebSiteUrl() {
		return webSiteUrl;
	}

	public void setWebSiteUrl(String webSiteUrl) {
		this.webSiteUrl = webSiteUrl;
	}

}
