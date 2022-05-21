package model;

import lombok.Data;
import javax.persistence.Entity;

/**
 * @author kolosov.slava
 */
@Data
@Entity
public class Group {

    private long id;
    private String name;
    private long instituteId;
}
