<style>
#notification-bar {
    width: 100vw;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1000;
    box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.15);
    margin-bottom: -1px;
    opacity: 1;
    animation-name: bn-notification-load;
    animation-duration: 0.8s;
}
#notification-bar .notification {
    position: relative;
    min-height: 20px;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding: 12px 50px 12px 20px;
    background-color: #016AFF;
    color: #fff;
}
#notification-bar .message {
    display: inline-block;
    line-height: 17px;
}
#notification-bar .message a {
    color: #fff;
    text-decoration: underline;
}
#notification-bar .notification-close {
    display: inline-block;
    position: absolute;
    right: 5px;
    top: 50%;
    height: 50px;
    width: 50px;
    transform: translate(0%,-50%);
    line-height: 50px;
    font-weight: bold;
    font-size: 1.2em;
    cursor: pointer;
}
@keyframes bn-notification-load {
    from {opacity: 0;}
    to {opacity: 1;}
}
</style>

<div id="notification-bar">
    <!-- <div class="notification" data-expire="">
        <span class="message"><strong>Need support? <a href="https://discord.gg/vGa7GeCu8B" target="_blank">Join our Discord!</a></strong></span>
        <span class="notification-close" onclick="this.parentElement.style.display = 'none'">✕</span>
    </div> -->
    <div class="notification" data-expire="1557294893">
        <span class="message"><strong>XRouter Beta Released! <a href="https://blocknet.co/xrouter-missing-link-between-all-blockchains/" target="_blank">Read more...</a></strong></span>
        <span class="notification-close" onclick="this.parentElement.style.display = 'none'">✕</span>
    </div>
    <div class="notification" data-expire="1557294893">
        <span class="message"><strong>Required Wallet Update! <a href="https://blocknet.co/#downloads" target="_blank">View downloads...</a></strong></span>
        <span class="notification-close" onclick="this.parentElement.style.display = 'none'">✕</span>
    </div>
</div>

<script type="text/javascript">
var notifications = document.getElementById('notification-bar');
for (var i = 0; i < notifications.children.length; i++) {
    var expiredDate = parseInt(notifications.children[i].getAttribute('data-expire'));
    var now = Math.round((new Date).getTime()/1000);
    if (expiredDate < now && expiredDate != "") {
        notifications.children[i].style.display = 'none';
    }
}
</script>




