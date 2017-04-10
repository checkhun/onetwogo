package com.plt;

import android.content.Context;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;

import com.plt.main.controller.MainController;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

public class MainActivity extends AppCompatActivity implements OnClickListener, MainController.MainCallBackListener {

    public static Context mContext;
    private MainController mainController;

    private Button testBtn;


    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        init();
        initView();
    }


    private void init() {
        mContext = this;

    }

    private void initView() {
        testBtn = (Button)findViewById(R.id.test_btn);
        testBtn.setOnClickListener(this);
    }



    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.test_btn:
                testRestApi("test");
                break;

        }
    }

    private void testRestApi(String keyword) {
        SimpleDateFormat mSimpleDateFormat = new SimpleDateFormat("MM.dd");
        String curDate = mSimpleDateFormat.format(new Date());

        mainController = new MainController(mContext,this);
        mainController.loadList(mContext,null,true);

        finish();
    }

    @Override
    public void onCompletedParsingDataProcess(int responseNumber, ArrayList keywordList) {
        //callback
    }
}
