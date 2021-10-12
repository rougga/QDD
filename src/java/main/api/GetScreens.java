/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package main.api;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import main.controller.ScreenController;
import main.modal.Screen;
import org.json.simple.JSONObject;

public class GetScreens extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            PrintWriter out = resp.getWriter();
            resp.setContentType("application/json");
            resp.setCharacterEncoding("UTF-8");
            JSONObject all = new JSONObject();
            List<Screen> screens = new ScreenController().getAll(req);
            for(Screen s:screens){
                
                
            }
            
            out.print(
                    all
            );
            
        } catch (Exception ex) {

        }
    }
   
    
   
}
