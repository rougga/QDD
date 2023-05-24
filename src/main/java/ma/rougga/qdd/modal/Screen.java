package ma.rougga.qdd.modal;

import java.util.Date;
import java.util.UUID;

public class Screen {

    private UUID id;
    private String name;
    private String creationDate;

    public Screen(String name, String creationDate) {
        this.id = UUID.randomUUID();
        this.name = name;
        this.creationDate = creationDate;
    }

    public Screen(UUID id, String name, String creationDate) {
        this.id = id;
        this.name = name;
        this.creationDate = creationDate;
    }
    

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getCreationDate() {
        return creationDate;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCreationDate(String creationDate) {
        this.creationDate = creationDate;
    }
    
    
}
