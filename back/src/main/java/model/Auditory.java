package model;

import lombok.Data;
import javax.persistence.Entity;

/**
 * @author kolosov.slava
 */
@Data
@Entity
public class Auditory {

    private long id;
    private String name;
}
