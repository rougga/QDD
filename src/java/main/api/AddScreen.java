
package main.api;

import java.io.IOException;
import java.util.Date;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import main.CONFIG;
import main.controller.ScreenController;
import main.modal.Screen;

public class AddScreen extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("UTF-8");
        System.err.println("name" + req.getAttribute("name"));
        Screen s = new Screen(req.getParameter("name"),CONFIG.sdf.format(new Date()));
        new ScreenController().addScreen(s, req);
    }
    
  
}
