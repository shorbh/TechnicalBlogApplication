package technicalblog.controller;

import org.springframework.stereotype.Service;
import technicalblog.model.Post;

import java.util.ArrayList;
import java.util.Date;
@Service
public class PostService {

    public ArrayList<Post> getAllPost(){

        ArrayList<Post> posts = new ArrayList<>();

        Post post1 = new Post();
        post1.setTitle("Post 1");
        post1.setDate(new Date());
        post1.setBody("This is the content of 1 Post");

        Post post2 = new Post();
        post2.setTitle("Post 2");
        post2.setDate(new Date());
        post2.setBody("This is the content of 2 Post");

        Post post3 = new Post();
        post3.setTitle("Post 3");
        post3.setDate(new Date());
        post3.setBody("This is the content of 1 Post");

        posts.add(post1);
        posts.add(post2);
        posts.add(post3);

        return posts;

    }

}
