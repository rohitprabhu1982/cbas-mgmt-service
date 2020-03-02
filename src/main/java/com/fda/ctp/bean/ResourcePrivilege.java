/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fda.ctp.bean;

import lombok.Data;

@Data
public class ResourcePrivilege {
    private Resource resource;
    private Privilege privilege;
}
