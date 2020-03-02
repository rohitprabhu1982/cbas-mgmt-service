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
public class StatusReponse {
    private String code;
    private String message;
    
    public StatusReponse(){
        this.code = "";
        this.message = "";
    }
    
    public StatusReponse(String _code, String _message){
        this.code = _code;
        this.message = _message;
    }
}
