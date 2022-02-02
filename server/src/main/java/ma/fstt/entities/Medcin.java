package ma.fstt.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class Medcin {
	@Transient
    public static final String SEQUENCE_NAME = "medcins_sequence";
	
	@Id
	private String id;
	private String name;
	private String speciality;
	
	private Clinique clinique;
	
	@JsonIgnore
	private Profile profile;
	
	public Medcin() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Medcin(String id, String name, String ville, String speciality) {
		super();
		this.id = id;
		this.name = name;
		this.speciality = speciality;
	}
	
	public Medcin(String name, String ville, String speciality) {
		super();
		this.name = name;
		this.speciality = speciality;
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

	public String getSpeciality() {
		return speciality;
	}

	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}
	
	public Clinique getClinique() {
		return clinique;
	}

	public void setClinique(Clinique clinique) {
		this.clinique = clinique;
	}
	
	public Profile getProfile() {
		return profile;
	}

	public void setProfile(Profile profile) {
		this.profile = profile;
	}

	@Override
	public String toString() {
		return "Medcin [id=" + id + ", name=" + name + ", speciality=" + speciality + "]";
	}

}
