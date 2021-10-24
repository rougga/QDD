
package main.api;

import java.io.IOException;
import java.util.UUID;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import main.controller.ScreenController;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class SaveScreen extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        UUID id = UUID.fromString(req.getParameter("screenId"));
        String data = req.getParameter("data");
        new ScreenController().saveScreenContent(req, id, data);
    }

}
