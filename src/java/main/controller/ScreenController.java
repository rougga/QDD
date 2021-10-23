package main.controller;

import java.io.File;
import java.io.IOException;
import java.net.URLEncoder;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.UUID;
import javax.servlet.ServletRequest;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import main.CONFIG;
import main.modal.Screen;
import org.w3c.dom.DOMException;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

public class ScreenController {

    public ScreenController() {
    }

    public List<Screen> getAll(ServletRequest request) throws ParserConfigurationException, SAXException, IOException {
        List<Screen> screens = new ArrayList<>();
        Document doc = new XMLController().getXml(request.getServletContext().getRealPath(CONFIG.FILE_SCREENS));
        Node cibles = doc.getFirstChild();
        NodeList nList = cibles.getChildNodes();
        for (int i = 0; i < nList.getLength(); i++) {
            Node nNode = nList.item(i);
            if (nNode.getNodeType() == Node.ELEMENT_NODE) {
                Element eElement = (Element) nNode;
                Screen s = new Screen(
                        UUID.fromString(eElement.getElementsByTagName("id").item(0).getTextContent()),
                        eElement.getElementsByTagName("name").item(0).getTextContent(),
                        eElement.getElementsByTagName("creationDate").item(0).getTextContent()
                );
                screens.add(s);
            }

        }
        return screens;
    }

    public boolean addScreen(Screen s,ServletRequest request) {
        try {
            String path = request.getServletContext().getRealPath(CONFIG.FILE_SCREENS);
            Document doc = new XMLController().getXml(path);
            Node cibles = doc.getFirstChild();

            Element screen = doc.createElement("screen");
            cibles.appendChild(screen);

            Element idE = doc.createElement("id");
            idE.appendChild(doc.createTextNode(s.getId().toString()));
            screen.appendChild(idE);

            Element nameE = doc.createElement("name");
            nameE.appendChild(doc.createTextNode(s.getName()));
            screen.appendChild(nameE);

            Element creationDateE = doc.createElement("creationDate");
            creationDateE .appendChild(doc.createTextNode(s.getCreationDate()));
            screen.appendChild(creationDateE );


            TransformerFactory transformerFactory = TransformerFactory.newInstance();
            Transformer transformer = transformerFactory.newTransformer();
            DOMSource source = new DOMSource(doc);
            StreamResult result = new StreamResult(new File(path));
            transformer.transform(source, result);
            return true;

        } catch (IOException | ParserConfigurationException | DOMException | SAXException | TransformerException e) {
           return false;
        }
    }

    public boolean removeScreen(UUID id) {

        return false;
    }

}
