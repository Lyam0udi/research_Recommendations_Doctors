package ma.fstt.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

public class WebSite {
	@Transient
    public static final String SEQUENCE_NAME = "websites_sequence";
	
	@Id
	private String id;
	private String name;
	private String url;
	
	public WebSite() {
		super();
		// TODO Auto-generated constructor stub
	}

	public WebSite(String id, String name, String url) {
		super();
		this.id = id;
		this.name = name;
		this.url = url;
	}
	
	public WebSite(String name, String url) {
		super();
		this.name = name;
		this.url = url;
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

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

}
