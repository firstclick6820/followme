import React from 'react';
import {Container, Row, Col, Accordion} from 'react-bootstrap'

const Faq = () => {
    return (
        <>  
            <Container id="faqAccordion">
                <Row>
                    <Col lg="12">
                        <Accordion id="accordionExample" defaultActiveKey="0">
                            <Accordion.Item className="mb-3" eventKey="0">
                                <Accordion.Header id="heading1">
                                       Connect Trading Account
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>FOLLOWME supports the connections of more than 3,000 Brokers. You can connect to an existing trading account,
                                    by searching the Broker’s MT4 server, entering the trading account login and password on the "Connect Account" page. 
                                    You can also create a new trading account of a top Broker on FOLLOWME. Accounts need to be connected to FOLLOWME
                                     after successful creation.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className="mb-3" eventKey="1">
                                <Accordion.Header id="heading2">
                                Real-time Data Synchronization to the STATICS Page
                                </Accordion.Header>
                                <Accordion.Body>
                                <p>When the trading account is successfully connected to FOLLOWME, all trading orders of the account
                                will be synchronized to FOLLOWME account statics page in real-time. The initial synchronization
                                will take 10 seconds to 10 minutes, depending on the quantities of trading orders.
                                The account statics page provides multi-dimensional charts and statically indicators, which can
                                comprehensively measure the performance of the trading account.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className="mb-3" eventKey="2">
                                <Accordion.Header id="heading3">
                                Apply for Becoming a Trader
                                </Accordion.Header>
                                <Accordion.Body>
                                <p>All you need is to have a real MT4 trading account connected to FOLLOWME and pass the real-name
                                authentication and qualification assessment, so that you can apply to become a FOLLOWME signal
                                provider and earn subscription fees.FOLLOWME’s real-name authentication requires that the creator
                                of the MT4 trading account must be consistent with the identity information of the creator of
                                the FOLLOWME account.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className="mb-3" eventKey="3">
                                <Accordion.Header id="heading4">
                                Use the COPYTRADE Function to Copy Trading Automatically
                                </Accordion.Header>
                                <Accordion.Body>
                                <p>On the SIGNAL or STATICS page, select traders who meet your own preferences through 
                                statistical indicators, FOLLOWRANK, skilled symbols, subscription price, whether 
                                using EA to trade and other parameters. <br />
                                Followers only need to pay the subscription
                                price set by the trader to copy trading signals automatically, and the subscription fee
                                is settled every 30 days. FOLLOWME provides two follow modes: "By Prorate" and "By Fixed ”: <br />
                                <ul> <br />
                                    <li>
                                    By Prorate: open a position according to a certain percentage of the trader's standard lot
                                of open position. Every time a trader opens a position, the standard lot for opening a 
                                position in your account will be executed according to the percentage you set multiplied 
                                by the trader's standard lot.
                                    </li> <br />
                                    <li>
                                    By Fixed: set a fixed standard lot. Every time a trader opens
                                a position, the standard lot for opening a position in your account will be executed 
                                according to this setting, no matter which trading symbol is selected.The tradable symbols
                                will be different in different Brokers .
                                    </li> <br />
                                </ul>
                                 The FOLLOMWE have matched over 350 standard symbols,
                                mainly including forex, metals, commodities, stock indexes, etc.
                                Non-standard symbols do not support copy trading. <br />
                                 If the trader turns on the "Subscription Protection"
                                function, the current subscription fee will be automatically refunded to the follower's wallet when
                                the net profit of the trader’s orders and follower’s following orders is less than
                                0 USD (including swaps and commissions) during the subscription period. <br /></p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className="mb-3" eventKey="4">
                                <Accordion.Header id="heading5">
                                WEBTRADER Online Trading Function
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>API trading accounts created by popular Brokers on FOLLOWME can use FOLLOWTRADE online trading functions.
                                    Based on global network service optimization technology, FOLLOWTRADE can connect with the Broker's server,
                                    support one-click close out, and display the stop loss and profit amount. Currently, this function only
                                    supports KVB Prime, FXPro, and Doo Prime.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className="mb-3" eventKey="5">
                                <Accordion.Header id="heading6">
                                FOLLOWGUARD Risk Control System
                                </Accordion.Header>
                                <Accordion.Body>
                                <p>In order to reduce the risk of copy trading, we strongly recommend that you use the FOLLOWGUARD risk
                                control system to protect your account. FOLLOWGUARD monitors the trading behavior of every trader you
                                are following, and automatically takes action according to the threshold you set. <br /> You can set relevant 
                                parameter for follower accounts on the "Account Management" page. <br />
                                <ul> <br />
                                    <li>
                                    Stop following all traders: once activated,it will stop following opening position and existing position will continue to follow closing.
                                    </li> <br />
                                    <li>
                                    Equity protection:when the account equity is lower than the setting value, the system will close all positions and stop following
                                all traders. You need to reactivated if you want to follow again.
                                    </li> <br />
                                    <li>
                                    Maximum trading volume: if you are following by prorate, it will open position with the maximum volume when the following volume exceeds the setting value.
                                    </li> <br />
                                    <li>
                                    Maximum position: no new position will be accepted if the total position exceeds the setting value. Only when the total 
                                position is less than the setting value will it continue to follow the opening position.
                                    </li> <br />
                                    <li>
                                    Follow the specified symbols only: set to only follow the trader’s one or part of the symbols to trade. It is recommended to select 
                                trader’s skilled or more profitable symbols.
                                    </li> <br />
                                    <li>
                                    Signal interruption of following traders: when the trader signal you 
                                are subscribing to is disconnected from FOLLOWME for more than 15 minutes, FOLLOWGUARD will send an early warning; 
                                when the connection is interrupted for more than 1 hour, FOLLOWGUARD will automatically close all following orders. 
                                You can also trade manually in conditions.
                                    </li> <br />
                                </ul>
                               </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className="mb-3" eventKey="6">
                                <Accordion.Header id="heading7">
                                Subscription Fee
                                </Accordion.Header>
                                <Accordion.Body>
                                <p>In order to create a good copytrading atmosphere, the FOLLOWME trading community adopts the model of "traders set 
                                    signal prices and followers pay for subscriptions on a monthly basis" to avoid potential conflicts of interest 
                                    between traders and followers caused by commission rebate based on trading volume, such as traders frequently 
                                    traded and slashed commission, resulting in losses in followers’ accounts. <br />
                                     The price setting range of the subscription 
                                    fee is "0 – 300 USD", which is set in multiples of 10. Traders can adjust the subscription price once every 30 days. <br />

                                    If the trader turns on the "Subscription Guarantee" function, the current subscription fee will be automatically 
                                    refunded to the follower's wallet when the total profit of the trader and following orders in followers’account are 
                                    both less than 0 USD (including swap , commission and floating P/L) during the subscription period. Turning on the 
                                    "Subscription Guarantee" function will have a dedicated label in the community, making it easier to attract followers to subscribe. <br /></p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className="mb-3" eventKey="7">
                                <Accordion.Header id="heading8">
                                        Trading Rules
                                </Accordion.Header>
                                <Accordion.Body>
                                <p>Using the MT4 terminal to trade, the following requirements must also be met: <br />
                                 <ul> <br />
                                     <li>
                                 It is not allowed to maliciously modify 
                                    the MT4 password when the follower is holding following positions, causing the signal disconnection from FOLLOWME;
                                    </li> <br />
                                 <li>
                                 
                                 Partial or hedging close positions are not supported. Partial or hedging close positions in a trader’s account may 
                                    result in the loss of signal or loss in the follower’s account;
                                    </li> <br />
                                 <li>
                                    
                                 The type of limit order and the stop loss and profit 
                                    value will not be copied to the follower’s account simultaneously;
                                    
                                    </li> <br />
                                 <li>
                                 The tradable symbols will be different in different 
                                    Brokers. The FOLLOMWE have matched over 350 standard symbols, mainly including forex, metals, commodities, stock indexes, etc.
                                    Non-standard symbols do not support copytrading.
                                    </li> <br />
                                
                                 </ul>
                                    
                                    
                                    
                                    
                                    FOLLOWME regards protecting the funds safety of follower’s account as 
                                    our most important principle. For this reason, we will closely monitor the high-risk trading behaviors of follower’s 
                                    account caused by traders. If traders conduct malicious operations, their subscription fee will be deducted, and they 
                                    may be permanently disabled from the FOLLOWME service. <br /> 
                                     In order to reduce trading risks, the trading rules that traders <br />
                                    <ul>
                                        <li>
                                        must follow are as below:Provide an accurate and clear description of the trading strategy so that follwers can copytrade 
                                    according to this description. Since followers do not like unexpected trading behavior, any strategy that does not match 
                                    the actual trading behavior of traders will affect its reputation and ranking in the community.
                                        </li><br />
                                        <li>
                                        The maximum position loss 
                                    pips of the account should not be greater than the total closed profit pips of the account. This requirement applies to 
                                    traders who have sufficient trading records.
                                        </li> <br />
                                        <li>
                                        The maximum loss of any single trade should not be greater than 700 pips. 
                                    Setting a reasonable stop loss is a mandatory requirement to protect follower’s account. A reasonable and effective 
                                    trading stop loss is also a way to promote the ranking of traders. Failure to set a stop loss or setting a large stop 
                                    loss will be considered a violation of trading rules.
                                        </li> <br />
                                        <li>
                                        FOLLOWME does not recommend trading strategy with a winning rate 
                                    close to 100%. This is potentially dangerous and may produce unusual loss pips.
                                        </li> <br />
                                        <li>
                                        FOLLOWME does not recommend scalp trading. 
                                    Due to the different trading policies and symbol quotations of various Brokers, scalp trading often cause different 
                                    trading results at different Broker account.
                                        </li> <br />
                                    </ul> 
                                    Note that the above standards are only for trading forex currencies. 
                                    Symbols such as gold, crude oil or other CFDs bear standards relative to this type. No trading will be excuted outside 
                                    the market tradable time. The specific trading time is subject to the trading time specified by the Broker selected by the user.</p> <br />
                                </Accordion.Body>
                            </Accordion.Item>   
                            <Accordion.Item className="mb-3" eventKey="8">
                                <Accordion.Header id="heading9">
                                        COPY TRADE
                                </Accordion.Header>
                                <Accordion.Body>
                                    
                                    <p> <span style={{fontWeight:"600"}}> What is COPYTRADE? </span><br />
                                    COPYTRADE bridges the gap between valuable information and transaction execution in the trading market. 
                                    By converting the order signals of professionals and talented traders worldwide, our COPYTRADE system can 
                                    quickly and automatically execute transactions in your account (which can be set according to your own preferences).
                                    With COPYTRADE, you don’t need to learn or monitor the market, because hundreds of thousands of traders around the world are working for you.
                                    All you have to do is to subscribe to the trader you like, and COPYTRADE will directly copy the trader’s order 
                                    signals in real time as real transactions in your account. <br /> <br />
                                    <span style={{fontWeight:"600"}}>
                                    How do I use COPYTRADE? 
                                    </span>
                                    <br /> By browsing the signal list, 
                                    choose your favorite trader, and subscribe on the trader’s account data analysis page. FOLLOWME provides two 
                                    follow-up trading modes, "based on fixed transaction volume" and "based on multiples". For more information, please refer to Guide for Follower
                                        
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>                
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Faq