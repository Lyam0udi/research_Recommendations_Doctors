package ma.fstt.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

public class Admin {
	@Transient
    public static final String SEQUENCE_NAME = "administrators_sequence";
	
	@Id
	private String id;
	private String name;
	private String email;
	private String password;
	
	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Admin(String name, String email, String password) {
		super();
		this.name = name;
		this.password = password;
		this.email = email;
	}
	
	public Admin(String email, String password) {
		super();
		this.password = password;
		this.email = email;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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
	@Override
	public String toString() {
		return "Admin [id=" + id + ", password=" + password + ", name=" + name + ", email=" + email + "]";
	}

	
}
