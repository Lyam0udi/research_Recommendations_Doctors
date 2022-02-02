package ma.fstt.sequences;

public class DatabaseSequence {
	private String id;
	private Long seq;
	
	public DatabaseSequence() {
		super();
		// TODO Auto-generated constructor stub
	}

	public DatabaseSequence(String id, Long seq) {
		super();
		this.id = id;
		this.seq = seq;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Long getSeq() {
		return seq;
	}

	public void setSeq(Long seq) {
		this.seq = seq;
	}
	
}
