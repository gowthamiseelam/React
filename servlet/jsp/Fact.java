/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.login;

/**
 *
 * @author Admin
 */
public class Fact {
    private int number;
    private long fact;
    public void setNumber(int number){
        this.number=number;        
    }
    public int getNumber(){
        return number;
    }
    public void getFactorial(long fact){
        this.fact=fact;
    }
    public long getFactorial(){
        fact=1;
        for(int i=1;i<=number;i++){
            fact=fact*i;
        }
        return fact;
    }
    
}
