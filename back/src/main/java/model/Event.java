package model;

import lombok.Data;

import javax.persistence.Entity;

@Data
@Entity
public class Event {

    private Long id;
    private String dt;
    private int pairNumber;
    private String description;
    private Long eventTypeId;
    private Long[] relatedQueries;
    private Long pairId;
}
