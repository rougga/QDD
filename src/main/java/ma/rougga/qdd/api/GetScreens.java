/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package ma.rougga.qdd.api;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import ma.rougga.qdd.controller.ScreenController;
import ma.rougga.qdd.modal.Screen;
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
