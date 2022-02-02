package ma.fstt.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

public class Profile {
	@Transient
    public static final String SEQUENCE_NAME = "profiles_sequence";
	@Id
	private String id;
	private String email;
	private String password;
	
	public Profile() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Profile(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
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

	@Override
	public String toString() {
		return "Profile [id=" + id + ", email=" + email + ", password=" + password + "]";
	}
	
}
