package model;


import lombok.Data;

import javax.persistence.Entity;

@Entity
@Data
public class Discipline {

    private Long id;
    private String name;
}
