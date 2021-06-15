package com.google.sps.servlets;

import com.google.gson.Gson;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/fav")
public class FavStatsServlet extends HttpServlet {

    public FavStatsServlet(String favColor, String favPet, String favSoftDrink) {
    }

    @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
      String favColor = "light blue";
      String favPet = "cat";
      String favSoftDrink = "root beer";

      FavStatsServlet favStats = new FavStatsServlet(favColor, favPet, favSoftDrink);
        String json = convertToJsonUsingGson(favStats);

    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

  public String convertToJsonUsingGson(FavStatsServlet favStats) {
    Gson gson = new Gson();
    String json = gson.toJson(favStats);
    return json;
  }
}
