/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fda.ctp.bean;

/**
 *
 * @author rabalasubramani3
 */
import java.io.Serializable;
import java.util.List;
import java.util.Map;

import lombok.Data;

@Data
public class Role implements Serializable {
    private static final long serialVersionUID = -2598920912004376626L;
    private String name;
    private String username;
    private Map<String, List<String>> resources;
}
