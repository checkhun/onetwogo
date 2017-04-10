package com.plt.main.controller;

import android.app.Dialog;
import android.content.Context;

import com.google.gson.Gson;
import com.plt.R;
import com.plt.common.Interface;
import com.plt.common.ServerResponse;

import java.util.ArrayList;
import java.util.HashMap;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class MainController {
	private Context mContext = null;
	private MainCallBackListener mCallback = null;
	private int responseNumber = -1;
	private Dialog mLoadingDialog = null;
	private boolean mShowLoadingDialog = false;

	public interface MainCallBackListener{
		public void onCompletedParsingDataProcess(int responseNumber,
																	   ArrayList keywordList);
	}

	public MainController(Context context, MainCallBackListener callback){
		mContext = context;
		mCallback = callback;
	}

	public void loadList(Context context, HashMap<String, String> query, boolean showLoadingDialog){
		mContext = context;

		//loading dialog 처리
//		mLoadingDialog = new LoadingDialog(mContext);
//		if(showLoadingDialog){
//			if(mContext != null && mLoadingDialog != null && !(((Activity) mContext).isFinishing())) {
//				mLoadingDialog.show();
//			}
//		}
		HashMap<String, String> testMap = new HashMap<String,String>();
		testMap.put("kihun","kihunval");

		Retrofit restAdapter = new Retrofit.Builder()
				.baseUrl(mContext.getString(R.string.MAIN_URL))
				.addConverterFactory(GsonConverterFactory.create())
				.build();
		Interface communicatorInterface = restAdapter.create(Interface.class);

		Call<ServerResponse> call = communicatorInterface.getMainData(testMap);


		final Callback<ServerResponse> callback = new Callback<ServerResponse>() {
			@Override
			public void onResponse(Call<ServerResponse> call, Response<ServerResponse> response) {
				if(response.code() == 200){
					try {
						ArrayList itemList = new ArrayList();
						Gson gson = new Gson();

						//     setSearchKeywordList(response, itemList);

						if(itemList == null){
							itemList = new ArrayList();
						}

						if (mCallback != null) {
							mCallback.onCompletedParsingDataProcess(responseNumber, itemList);
						}

						if(mLoadingDialog != null){
							try {
								if (mLoadingDialog.isShowing()) {
									mLoadingDialog.dismiss();
								}
							} catch (Exception ex) {

							}
						}

					} catch (Exception e){
						if(mCallback != null)
							mCallback.onCompletedParsingDataProcess(responseNumber, null);
					}
				}else{
					if(mLoadingDialog != null){
						try {
							if (mLoadingDialog.isShowing()) {
								mLoadingDialog.dismiss();
							}
						} catch (Exception ex) {

						}
					}
				}
			}

			@Override
			public void onFailure(Call<ServerResponse> call, Throwable t) {
				if(mLoadingDialog != null){
					try {
						if (mLoadingDialog.isShowing()) {
							mLoadingDialog.dismiss();
						}
					} catch (Exception ex) {

					}
				}
				if(t.toString() != null){

				}
			}
		};
		call.enqueue(callback);
	}

}
