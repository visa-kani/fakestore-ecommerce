'use client'
import React from 'react'
import Footer from '@/container/footer';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import Header from '@/container/header';

function layoutContent() {
    return (
        <div>
            <Provider store={store}>
                <Header />
                {children}
                <Footer />
            </Provider>
        </div>
    )
}

export default layoutContent