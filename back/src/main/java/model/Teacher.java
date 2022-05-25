package model;

import lombok.Data;
import javax.persistence.Entity;

/**
 * @author kolosov.slava
 */
@Data
@Entity
public class Teacher {

    private long id;
    private String surname;
    private String firstName;
    private String patronymic;
}
