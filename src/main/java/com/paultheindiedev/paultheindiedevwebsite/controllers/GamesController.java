package com.paultheindiedev.paultheindiedevwebsite.controllers;

import com.paultheindiedev.paultheindiedevwebsite.models.CreateGameRequest;
import com.paultheindiedev.paultheindiedevwebsite.models.UpdateGameRequest;
import com.paultheindiedev.paultheindiedevwebsite.services.interfaces.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("games")
public class GamesController {

    @Autowired
    private GameService gameService;

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<?> createGame(@RequestBody CreateGameRequest createGameRequest) {

        gameService.createGame(createGameRequest);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public ResponseEntity<?> updateGame(@RequestBody UpdateGameRequest updateGameRequest) {

        gameService.updateGame(updateGameRequest);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
