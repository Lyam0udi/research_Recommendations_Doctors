package ma.fstt.entities;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

public class Tags {
	@Transient
    public static final String SEQUENCE_NAME = "tags_sequence";
	
	@Id
	private String id;
	private String speciality;
	private List<String> tags;
	
	public Tags() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Tags(String id, String speciality) {
		super();
		this.id = id;
		this.speciality = speciality;
	}
	
	public Tags(String speciality) {
		super();
		this.speciality = speciality;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getSpeciality() {
		return speciality;
	}

	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}

	public List<String> getTags() {
		return tags;
	}

	public void setTags(List<String> tags) {
		this.tags = tags;
	}
	
}