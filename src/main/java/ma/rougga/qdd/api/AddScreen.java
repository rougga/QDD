
package ma.rougga.qdd.api;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;

import ma.rougga.qdd.CONFIG;
import ma.rougga.qdd.controller.ScreenController;
import ma.rougga.qdd.modal.Screen;

public class AddScreen extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("UTF-8");
        System.err.println("name" + req.getAttribute("name"));
        Screen s = new Screen(req.getParameter("name"),CONFIG.sdf.format(new Date()));
        new ScreenController().addScreen(req,s);
    }
    
  
}
