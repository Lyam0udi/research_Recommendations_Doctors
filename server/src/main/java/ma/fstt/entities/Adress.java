package ma.fstt.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

public class Adress {
	@Transient
    public static final String SEQUENCE_NAME = "adresses_sequence";
	
	@Id
	private String id;
	private String ville;
	private String location;
	private double longitude = -5.8085;
	private double latitude = 35.7795;
	
	public Adress() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public Adress(String ville, String location) {
		super();
		this.ville = ville;
		this.location = location;
	}

	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	public String getVille() {
		return ville;
	}
	public void setVille(String ville) {
		this.ville = ville;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	
	public double getLongitude() {
		return longitude;
	}

	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}


	public double getLatitude() {
		return latitude;
	}


	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}


	@Override
	public String toString() {
		return "Adress [id=" + id + ", location=" + location + ", longitude=" + longitude + ", latitude=" + latitude
				+ "]";
	}
	
	

}
