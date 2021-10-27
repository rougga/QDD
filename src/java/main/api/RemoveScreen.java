
package main.api;

import java.io.IOException;
import java.util.UUID;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import main.controller.ScreenController;
import org.apache.commons.lang3.StringUtils;

public class RemoveScreen extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String id = req.getParameter("id");
        if(StringUtils.isBlank(id)){
            
        }else{
            new ScreenController().removeScreen(req, UUID.fromString(id));
        }
    }
 
}
