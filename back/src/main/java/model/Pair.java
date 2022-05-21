package model;


import lombok.Data;

import javax.persistence.Entity;

@Entity
@Data
public class Pair {

    private Long id;
    private Long typeId;
    private int day;
    private int pairNumber;
    private Long disciplineId;
    private String weekBeginning;
    private int subgroupNumber;

}
