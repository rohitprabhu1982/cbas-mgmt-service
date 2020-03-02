/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fda.ctp.bean;

import lombok.Data;

/**
 *
 * @author rabalasubramani3
 */
@Data
public class TBDResource {
    private String name;
    private Long resourceId;
    private Long tdlId;
    private String email;
    private String lcatCode;
    private Long lcatId;
    private String active;
    private String placeholder;
}
